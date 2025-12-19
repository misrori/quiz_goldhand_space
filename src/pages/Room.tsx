import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import AdminView from "@/components/room/AdminView";
import ParticipantView from "@/components/room/ParticipantView";
import { Loader2 } from "lucide-react";

const Room = () => {
  const { roomCode } = useParams();
  const [searchParams] = useSearchParams();
  const adminPassword = searchParams.get("admin");

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [roomId, setRoomId] = useState<string | null>(null);

  useEffect(() => {
    const verifyRoom = async () => {
      if (!roomCode) {
        toast.error("Invalid room code");
        setIsLoading(false);
        return;
      }

      try {
        const { data: room, error } = await supabase
          .from("rooms")
          .select("*")
          .eq("code", roomCode.toUpperCase())
          .single();

        if (error || !room) {
          toast.error("Room not found");
          setIsLoading(false);
          return;
        }

        setRoomId(room.id);

        // Check if admin
        if (adminPassword && adminPassword === room.admin_password) {
          setIsAdmin(true);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error verifying room:", error);
        toast.error("Failed to verify room");
        setIsLoading(false);
      }
    };

    verifyRoom();
  }, [roomCode, adminPassword]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!roomId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Room not found</h1>
          <p className="text-muted-foreground">Please check your room code</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background">
      {isAdmin ? (
        <AdminView roomId={roomId} roomCode={roomCode!} />
      ) : (
        <ParticipantView roomId={roomId} roomCode={roomCode!} />
      )}
    </div>
  );
};

export default Room;

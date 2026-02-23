import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function FeedbackModal({
  open,
  onClose,
  messages,
}) {

  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = () => {

    const conversations =
      JSON.parse(
        localStorage.getItem("conversations")
      ) || [];

    const newConversation = {

      id: Date.now(),

      messages: messages,

      rating: rating,

      feedback: feedbackText,

      date: new Date().toLocaleString(),

    };

    conversations.push(newConversation);

    localStorage.setItem(
      "conversations",
      JSON.stringify(conversations)
    );

    onClose();
  };

  return (

    <Dialog open={open} onClose={onClose}>

      <DialogTitle>
        Provide Additional Feedback
      </DialogTitle>

      <DialogContent>

        <Box sx={{ display: "flex", mb: 2 }}>

          {[1, 2, 3, 4, 5].map((star) => (

            <AiFillStar
              key={star}
              size={30}
              style={{
                cursor: "pointer",
                color:
                  star <= rating
                    ? "#FFD700"
                    : "#ccc",
              }}
              onClick={() => setRating(star)}
            />

          ))}

        </Box>

        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Enter feedback"
          value={feedbackText}
          onChange={(e) =>
            setFeedbackText(e.target.value)
          }
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </DialogActions>

    </Dialog>

  );

}
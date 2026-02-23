import { Box, TextField, Button } from "@mui/material";

export default function ChatInput({
  input,
  setInput,
  handleAsk,
  handleSave
}) {

  const submit = (e) => {
    e.preventDefault();
    handleAsk();
  };

  return (

    <form onSubmit={submit}>

      <Box display="flex" gap={2}>

        {/* CYPRESS LOOKS FOR THIS INPUT */}
        <TextField
          placeholder="Message Bot AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {/* MUST BE submit */}
        <Button type="submit" variant="contained">
          Ask
        </Button>

        {/* MUST BE button */}
        <Button
          type="button"
          variant="outlined"
          onClick={handleSave}
        >
          Save
        </Button>

      </Box>

    </form>

  );

}
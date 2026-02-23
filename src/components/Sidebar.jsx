import { Box, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <Box
      sx={{
        width: 260,
        background: "#ECE7FF",
        height: "100vh",
        padding: 2
      }}
    >

      <Stack spacing={2}>

        {/* REQUIRED LINK */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" fullWidth>
            New Chat
          </Button>
        </Link>

        {/* REQUIRED LINK */}
        <Link to="/history" style={{ textDecoration: "none" }}>
          <Button variant="outlined" fullWidth>
            Past Conversations
          </Button>
        </Link>

      </Stack>

    </Box>

  );

}
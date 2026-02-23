import { Box, Avatar, Typography } from "@mui/material";

import bot from "../assets/bot.png";
import user from "../assets/user.png";

export default function ChatMessage({ sender, text }) {

  const isBot = sender === "bot";

  return (

    <Box
      display="flex"
      gap={2}
      padding={2}
      marginBottom={2}
      bgcolor="#f5f5f5"
      borderRadius="10px"
    >

      <Avatar src={isBot ? bot : user} />

      <Box>

        {/* CYPRESS LOOKS FOR span Soul AI */}
        <Typography fontWeight="bold">

          {isBot
            ? <span>Soul AI</span>
            : "You"
          }

        </Typography>

        {/* CYPRESS LOOKS FOR p */}
        <Typography component="p">
          {text}
        </Typography>

      </Box>

    </Box>

  );

}
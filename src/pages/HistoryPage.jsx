import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";

export default function HistoryPage() {

  const history =
    JSON.parse(localStorage.getItem("chatHistory"))
    || [];

  return (

    <Box display="flex">

      <Sidebar />

      <Box padding={3}>

        <div>Past Conversations</div>

        {history.map((conv, index) => (

          <Box key={index}>

            {conv.map((msg, i) => (

              <div key={i}>
                {msg.text}
              </div>

            ))}

          </Box>

        ))}

      </Box>

    </Box>

  );

}
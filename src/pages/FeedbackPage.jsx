import {
  Box,
  Typography,
  Paper,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import Sidebar from "../components/Sidebar";

export default function FeedbackPage() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [filter, setFilter] =
    useState("all");

  const conversations =
    JSON.parse(
      localStorage.getItem("conversations")
    ) || [];

  const filtered =
    filter === "all"
      ? conversations
      : conversations.filter(
          (c) => c.rating === filter
        );

  return (

    <Box sx={{ display: "flex" }}>

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Box sx={{ flex: 1, padding: 2 }}>

        {/* Mobile Top Bar */}
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
            alignItems: "center",
            mb: 2,
          }}
        >

          <IconButton
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <AiOutlineMenu />
          </IconButton>

          <Typography ml={1}>
            Feedback
          </Typography>

        </Box>

        <Typography variant="h4">
          Feedback Summary
        </Typography>

        {/* Filter */}
        <Select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          sx={{ mb: 2 }}
        >

          <MenuItem value="all">
            All
          </MenuItem>

          {[5,4,3,2,1].map((r)=>(
            <MenuItem key={r} value={r}>
              {r} Stars
            </MenuItem>
          ))}

        </Select>

        {filtered.map((c)=>(
          <Paper key={c.id} sx={{p:2,mb:2}}>

            <Box>

              {[1,2,3,4,5].map((star)=>(
                <AiFillStar
                  key={star}
                  color={
                    star <= c.rating
                      ? "#FFD700"
                      : "#ccc"
                  }
                />
              ))}

            </Box>

            <Typography>
              {c.feedback}
            </Typography>

          </Paper>
        ))}

      </Box>

    </Box>

  );

}
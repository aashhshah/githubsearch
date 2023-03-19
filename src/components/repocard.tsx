import { lexend } from "@/theme";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { Avatar, Box, Card, Chip, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { HtmlTooltip } from "./tooltip";
export interface Props {
  avtarurl: string | null
  repo_name: string
  stars: number
  description: string | null
  language: string | null
  githublink: string
  userLink: string
  userId: string
  watchers: number

}


const RepoCard = (props: Props) => {
  const router = useRouter()
  return (
    <Card
      onClick={() => router.push(props.githublink)}
      variant="outlined"
      sx={{
        width: '100%', height: '100%',
        "&:hover": {
          backgroundColor: "#bdb3aa"
        }
      }}>
      <Box display="flex" flexDirection="column" height="100%">
        <Box display="flex" alignContent="center" alignItems="center" p={1}  >
          <Typography alignContent="center" fontFamily={lexend.style.fontFamily} flexGrow={1}>
            {props.repo_name}
          </Typography>
          <StarBorderIcon /> {props.stars}
        </Box>
        <Divider variant="fullWidth" />
        <Box p={2} display="flex" flexDirection="column" flexGrow={1}>
          <Box flexGrow={1}>
            <HtmlTooltip title={props.description}>
              <Typography sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}>
                {props.description ? props.description : 'No Description'}
              </Typography>
            </HtmlTooltip>
          </Box>
          {props.language ? <Chip label={props.language} /> : ''}
        </Box>
        <Divider />
        <Box display="flex" flexDirection="row-reverse" alignItems="center" p={1} flexShrink={1}>
          <Avatar alt={props.userId} src={props.avtarurl} />
          <Typography pr={1}>
            {props.userId}
          </Typography>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <HtmlTooltip title={'watchers'}>
              <VisibilitySharpIcon fontSize="small" />
            </HtmlTooltip>
            <Typography variant="body2" pl={0.5}>
              {props.watchers}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card >

  )
}

export default RepoCard;
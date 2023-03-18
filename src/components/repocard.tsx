import { lexend } from "@/theme";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Card, Divider, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import HoverPopover from "material-ui-popup-state/HoverPopover";
export interface Props {
  avtarurl: string | null
  repo_name: string
  stars: number
  Description: string | null
  language: string | null
}


const RepoCard = (props: Props) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <Card
          variant="outlined"
          // {...bindHover(popupState)}
          sx={{
            width: '100%', height: '100%', "&:hover": {
              backgroundColor: "#bdb3aa"
            }
          }}>
          <Box display="flex" alignContent="center" alignItems="center" p={1} >
            <Typography alignContent="center" fontFamily={lexend.style.fontFamily} flexGrow={1}>
              {props.repo_name}
            </Typography>
            <StarBorderIcon /> {props.stars}
          </Box>
          <Divider variant="fullWidth" />
          <Box p={2}>
            {props.Description}
          </Box>
          {/* <Avatar src={props.avtarurl} /> */}
          <HoverPopover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ height: '50vh', width: '50vw' }}>
              {props.language}
            </Box>
          </HoverPopover>
        </Card>
      )}
    </PopupState>
  )
}

export default RepoCard;



function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindHover(popupState)}>
            Open Popover
          </Button>
          <HoverPopover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </HoverPopover>
        </div>
      )}
    </PopupState>
  );
}
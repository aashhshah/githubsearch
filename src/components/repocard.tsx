import { Avatar, Card, CardContent } from "@mui/material";


export interface Props {
  avtarurl: string | null
  repo_name: string
  stars: number
  Description: string | null
  language: string | null
}


const RepoCard = (props: Props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Avatar src={props.avtarurl} />
      </CardContent>
    </Card>
  )
}

export default RepoCard;
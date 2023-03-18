import { GitHubSearch } from '@/api/githubsearch';
import RepoCard from '@/components/repocard';
import { TittleBar } from '@/components/tittlaBar';
import { Item } from '@/model/githubresmodel';
import { Button, Container, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';


export default function Home() {
  const [age, setAge] = useState(10)
  const [searchQry, setsearchQry] = useState('')

  const [data, setData] = useState<Item[]>([]);


  const handleSearch = async () => {
    const responseData = await GitHubSearch.sendRequest(searchQry, 'asc', null);
    if (responseData !== null) {
      setData(responseData?.items);
    }
  }

  return (
    <Box minHeight="100vh" >
      <TittleBar />
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item>
            <TextField value={searchQry} onChange={(e) => setsearchQry(e.target.value)} label="Search" variant='filled' />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <Select
                variant='filled'
                label="aasb"
                value={age}
              // label="ASdjlasbd"
              // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant='contained' onClick={handleSearch}>
              Go
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" fontWeight={700} >
          PUBLIC REPOSITORIES
        </Typography>
        <Grid container spacing={1}>
          {data.map((item) => (
            <Grid xs={12} sm={12} md={6} lg={4} xl={4} item key={item.git_url} >
              <RepoCard
                Description={item.description}
                avtarurl={item.owner.avatar_url}
                language={item.language}
                repo_name={item.name}
                stars={item.stargazers_count}
                key={item.git_url}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  );
}
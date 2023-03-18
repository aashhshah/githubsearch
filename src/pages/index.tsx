import { GitHubSearch } from '@/api/githubsearch';
import RepoCard from '@/components/repocard';
import { TittleBar } from '@/components/tittlaBar';
import { Item } from '@/model/githubresmodel';
import { Button, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SvgIcon, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';


export default function Home() {
  const [stSortBy, setSortBy] = useState<"stars" | "forks" | "help-wanted-issues" | "updated" | null>(null)
  const [stOrderBy, setOrderBy] = useState<"desc" | "asc">("asc")
  const [searchQry, setsearchQry] = useState('')
  const [data, setData] = useState<Item[]>([]);


  const handleSearch = async () => {
    const responseData = await GitHubSearch.sendRequest(searchQry, stOrderBy, stSortBy);
    if (responseData !== null) {
      setData(responseData?.items);
    } else setData([])
  }

  return (
    <Box minHeight="100vh" >
      <TittleBar />
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xl={5} >
            <TextField
              value={searchQry}
              onChange={(e) => setsearchQry(e.target.value)}
              fullWidth
              hiddenLabel
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <Search />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search Repositories"
            />
          </Grid>
          <Grid item xl={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                fullWidth
                // variant='filled'
                label="Sort By"
                value={stSortBy}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setSortBy(e.target.value as unknown as "stars" | "forks" | "help-wanted-issues" | "updated" | null)}

              >
                <MenuItem value={'stars'}>stars</MenuItem>
                <MenuItem value={'forks'}>forks</MenuItem>
                <MenuItem value={'help-wanted-issues'}>help-wanted-issues</MenuItem>
                <MenuItem value={'updated'}>updated</MenuItem>
                <MenuItem value={null}>Remove</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xl={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Order By</InputLabel>
              <Select
                fullWidth
                // variant='filled'
                label="Order By"
                value={stOrderBy}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setOrderBy(e.target.value as unknown as "desc" | "asc")}

              >
                <MenuItem value={'asc'}>ascending</MenuItem>
                <MenuItem value={'desc'}>descending</MenuItem>

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
        <Grid container spacing={1} alignItems="stretch">
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

import { createSvgIcon } from '@mui/material/utils';

export const Search = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>,
  'Search'
);

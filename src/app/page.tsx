"use client"

import PokemonCard from '@/components/molecules/pokemon-card/pokemon-card'
import styles from './page.module.css'
import { Container, Grid } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
		<Container fixed>
		<Grid container spacing={2}>
  <Grid item xs={3}>
    <PokemonCard title="Pikachu"/>
  </Grid>
  <Grid item xs={3}>
    <PokemonCard title="Carapuce"/>
  </Grid>
  <Grid item xs={3}>
    <PokemonCard title="Bulbizarre"/>
  </Grid>
  <Grid item xs={3}>
    <PokemonCard title="Dracaufeu"/>
  </Grid>
</Grid>
		</Container>
	</main>
  )
}

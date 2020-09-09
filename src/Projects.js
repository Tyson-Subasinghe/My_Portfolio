import React from 'react';
import mealMatchImage from './assets/mealMatchImage.png';
import dungeonGameImage from './assets/dungeonGameImage.png';
import fnc1Image from './assets/fnc1Image.png';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';




const classes = makeStyles((theme) => ({

    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "#f2f4f6",
    },

    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));





export const Projects = () => (

        <div>
            
            <h1>Projects</h1>
            

            
            
            <GridList cellHeight={500} className={classes.gridList}>
                
                
                <GridListTile key={1}>
                    <img src={mealMatchImage} alt={"mealmatch"} />
                    <GridListTileBar
                    title={"MealMatch"}
                    subtitle={"ReactJS, Python"}
                    />
                </GridListTile>

                <GridListTile key={2}>
                    <img src={dungeonGameImage} alt={"dungeon"} />
                    <GridListTileBar
                    title={"Dungeon Game"}
                    subtitle={"Java"}
                    />
                </GridListTile>

                <GridListTile key={3}>
                    <img src={fnc1Image} alt={"fnc1"} />
                    <GridListTileBar
                    title={"FNC-1 Analysis"}
                    subtitle={"Written Report"}
                    />
                </GridListTile>
                
            </GridList>



        </div>

    
)
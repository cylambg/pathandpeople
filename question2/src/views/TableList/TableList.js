import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from 'react';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();

  const [people, setPeople] = useState([])
  useEffect(() => {
    axios.get("https://api.json-generator.com/templates/Xp8zvwDP14dJ/data", { 
      headers: { 
        'Authorization': 'Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z' 
      } })
      .then((response) => setPeople(response.data));
  })

  // const people = [
  //   {
  //     "_id": "27ec0133-a2c1-4ea0-94f4-de9805786484",
  //     "name": {
  //         "last": "Savage",
  //         "first": "Cathryn"
  //     },
  //     "email": "cathryn.savage@undefined.me",
  //     "picture": "http://placehold.it/222x162",
  //     "location": {
  //         "latitude": 22.3233272,
  //         "longitude": 114.004667
  //     }
  // },
  // {
  //     "_id": "f0ee1e49-cfe9-4c85-8c19-92f86fb57118",
  //     "name": {
  //         "last": "Espinoza",
  //         "first": "Parker"
  //     },
  //     "email": "parker.espinoza@undefined.biz",
  //     "picture": "http://placehold.it/90x123",
  //     "location": {
  //         "latitude": 22.3507633,
  //         "longitude": null
  //     }
  // },
  // {
  //     "_id": "f098b6b1-c5e3-4ec9-b54b-f7d3b862aa57",
  //     "name": {
  //         "last": "Allison",
  //         "first": "Meghan"
  //     },
  //     "email": "meghan.allison@undefined.net",
  //     "picture": "http://placehold.it/209x217",
  //     "location": {
  //         "latitude": 22.3946692,
  //         "longitude": 114.111799
  //     }
  // },
  // {
  //     "_id": "8b0ce57b-1605-4645-b37d-8ba31775c9d4",
  //     "name": {
  //         "last": "Hyde",
  //         "first": "Aileen"
  //     },
  //     "email": "aileen.hyde@undefined.org",
  //     "picture": "http://placehold.it/107x118",
  //     "location": {
  //         "latitude": 22.3447347,
  //         "longitude": 114.179403
  //     }
  // },
  // {
  //     "_id": "8cd345e4-5ebe-435f-8352-a90837981973",
  //     "name": {
  //         "last": "Hart",
  //         "first": "Isabelle"
  //     },
  //     "email": "isabelle.hart@undefined.ca",
  //     "picture": "http://placehold.it/138x110",
  //     "location": {
  //         "latitude": 22.3359512,
  //         "longitude": 113.665635
  //     }
  // },
  // {
  //     "_id": "0c70049c-e0a3-40d5-9c19-f6356b73acf5",
  //     "name": {
  //         "last": "Dickerson",
  //         "first": "Berta"
  //     },
  //     "email": "berta.dickerson@undefined.name",
  //     "picture": "http://placehold.it/228x207",
  //     "location": {
  //         "latitude": 22.3999055,
  //         "longitude": null
  //     }
  // }
  // ];  

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>List of People</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["First Name", "Last Name", ""]}
              tableData={people.map((person) => {
                return [
                  person.name.first,
                  person.name.last,
                  <Link
                    to={{
                      pathname: `detail/${person._id}`,
                      state: { person: person }
                    }}
                    key={person._id}
                  >
                    <IconButton >
                      <VisibilityIcon/>
                    </IconButton>
                  </Link>
                ];
              })}
            >
            </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

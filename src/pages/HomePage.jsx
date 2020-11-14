import Typography from "@material-ui/core/Typography";
import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {ProductSearchRequestDto} from "../dto/ProductSearchRequestDto";
import {connect} from "react-redux";
import {searchProduct} from "../redux/product/ProductAction";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const HomePage = (props) => {

    useEffect(() => {
        let productSearchRequestDto = new ProductSearchRequestDto();
        props.searchProduct(productSearchRequestDto)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classes = useStyles();
    let history = useHistory();

    const checkout = (item) => {
        debugger;
        history.push(
            {
                pathname: '/checkout-page',
                state: item
            }
        );
    };

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {props.productList.items !== undefined && props.productList.items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="http://localhost:3000/no-product.png"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.productName}
                                </Typography>
                                <Typography>
                                    LKR {item.unitPrice}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => checkout(item)}>
                                    Add to cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        productList: state.product.productList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchProduct: (productSearchRequestDto) => dispatch(searchProduct(productSearchRequestDto)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

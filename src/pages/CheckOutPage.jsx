import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {CalculateRequestDto} from "../dto/CalculateRequestDto";
import {connect} from "react-redux";
import {priceCalculator} from "../redux/calculator/CalculatorAction";
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const CheckOutPage = (props) => {

    const classes = useStyles();
    const [formData, setFormData] = useState("");
    let history = useHistory();

    useEffect(() => {
        if (props.location.state !== undefined) {
            setFormData(props.location.state);
        }
    }, [props.location.state]);

    /** Form Validation*/
    const validationSchema = Yup.object().shape({
        requestQty: Yup.string().required("Required field"),
    });

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CardHeader
                            title={"Checkout"}
                            titleTypographyProps={{variant: 'subtitle1'}}
                        />
                        <CardContent>
                            <Grid container direction="row" spacing={3}>
                                <Grid item xs={6} sm={6}>

                                    <Formik
                                        enableReinitialize
                                        initialValues={{
                                            id: formData.id || null,
                                            productName: formData.productName || '',
                                            unitPrice: formData.unitPrice || '',
                                            requestQty: '',
                                        }}
                                        onSubmit={(values) => {
                                            let calculateRequestDto = new CalculateRequestDto()
                                            calculateRequestDto.productId = formData.id;
                                            calculateRequestDto.requestQty = values.requestQty;
                                            props.priceCalculator(calculateRequestDto);
                                        }}
                                        validationSchema={validationSchema}
                                    >
                                        {({
                                              values,
                                              errors,
                                              touched,
                                              handleChange,
                                              handleBlur,
                                              handleSubmit,
                                              setFieldValue
                                          }) => (
                                            <form
                                                noValidate={true}
                                                autoComplete="off"
                                                onSubmit={handleSubmit}
                                            >

                                                <Grid container direction="row" spacing={3}>
                                                    <Grid item xs={12} md={12}>
                                                        <TextField
                                                            variant="outlined"
                                                            size="small"
                                                            label="Product Name"
                                                            margin="normal"
                                                            name="productName"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.productName}
                                                            helperText={touched.productName && errors.productName}
                                                            error={Boolean(touched.productName && errors.productName)}
                                                            disabled={true}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <TextField
                                                            variant="outlined"
                                                            size="small"
                                                            label="Unit Price"
                                                            margin="normal"
                                                            name="unitPrice"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.unitPrice}
                                                            helperText={touched.unitPrice && errors.unitPrice}
                                                            error={Boolean(touched.unitPrice && errors.unitPrice)}
                                                            disabled={true}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid container direction="row" spacing={3}>
                                                    <Grid item xs={12} md={12}>
                                                        <TextField
                                                            type="number"
                                                            variant="outlined"
                                                            size="small"
                                                            label="Request Qty"
                                                            margin="normal"
                                                            name="requestQty"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.requestQty}
                                                            helperText={touched.requestQty && errors.requestQty}
                                                            error={Boolean(touched.requestQty && errors.requestQty)}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid container direction="row" spacing={3}>
                                                    <Grid item xs={12} sm={12}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            type="submit"
                                                        >
                                                            Calculate
                                                        </Button>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            onClick={() => history.goBack()}
                                                            style={{marginLeft: "10px"}}
                                                        >
                                                            Back
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        )}

                                    </Formik>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <div>
                                                <Typography variant="h6" color="textSecondary">
                                                    Total Price
                                                    : {props.calculatorResult !== undefined ? props.calculatorResult.totalPrice.toFixed(2) : 0.00}
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    Total Discount
                                                    : {props.calculatorResult !== undefined ? props.calculatorResult.totalDiscount.toFixed(2) : 0.00}
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    No Of Cartoon
                                                    : {props.calculatorResult !== undefined ? props.calculatorResult.noOfCartoon : 0}
                                                </Typography>
                                                <Typography variant="h6" color="textSecondary">
                                                    No Of Units
                                                    : {props.calculatorResult !== undefined ? props.calculatorResult.noOfUnits : 0}
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        calculatorResult: state.calculator.calData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        priceCalculator: (calculateRequestDto) => dispatch(priceCalculator(calculateRequestDto))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);

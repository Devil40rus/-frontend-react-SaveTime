import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData } from "./store";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class App extends Component {

    componentDidMount() {
        this.props.dispatch(loadData({count: 20}));
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div className="App">
                <section className='section'>
                    <div style={{ width: 1000 }}>
                        <Autocomplete
                            freeSolo
                            disableClearable
                            options={products && products.length && products.map((product) => product.name)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Поиск по магазину"
                                margin="normal"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                            )}
                        />
                    </div>
                </section>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);

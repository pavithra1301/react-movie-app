import React from "react";
import Spinner from "./Loader"

const withLoader = WrappedComponent => {
    class WithLoader extends React.Component {
        render (){
            return  (
                this.props.isLoading ? <Spinner/> : <WrappedComponent movies={this.props.movies}/>
            )      
        }
    }
    return WithLoader
}

export default withLoader;
/**
 * Created by beeraman on 3/26/2017.
 */
var CartTimeoutMixin = {
    componentWillMount: function () {
        this.setInterval(this.decrementCartTimer, 1000);
    },
    decrementCartTimer(){
        if (this.state.cartTimeout == 0) {
            this.props.alertCartTimeout();
            return;
        }
        this.setState({cartTimeout: this.state.cartTimeout - 1});
    },
    componentWillUnmount:function(){
        this.props.updateCartTimeout(this.state.cartTimeout);
    }
};

export default CartTimeoutMixin;
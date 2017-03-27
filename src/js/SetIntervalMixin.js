/**
 * Created by beeraman on 3/26/2017.
 */
var SetIntervalMixin = {
    componentWillMount:function() {
        this.intervals = [];
    },
    setInterval:function(){
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount:function(){
        this.intervals.map(clearInterval);
    }
};

export default SetIntervalMixin;
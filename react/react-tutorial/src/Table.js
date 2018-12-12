import React,{Component} from 'react';

class Table extends Component{
    render(){
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>工程师</td>
                    </tr>
                    <tr>
                        <td>糖糖</td>
                        <td>前端工程师</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}
export default Table
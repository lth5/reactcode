import React , {Component} from 'react';
// 1
const EmptyTableHOC = (OriginalComponent,...rest) => {
	return props => {
		return (
            <div>
                {rest}
                <OriginalComponent {...props}>
			    </OriginalComponent>
            </div>
                
		);
	}
}


// const  EmptyTableHOC = (OriginalComponent) => {
// 	return class extends React.Component  {
// 		render() {
// 			return (
// 				<OriginalComponent {...this.props}>
// 				</OriginalComponent>
// 			);
// 		}
// 	}
// }





// import {Table, Button} from 'antd';
// import PropTypes from 'prop-types';

// const EmptyTableHOC = (WrappedComponent) =>
//     class Wrapper extends Component {
//         emptyText = (height) => {
//             if (this.props.emptyBtnText) {
//                 let loading = this.props.emptyBtnLoading
//                 return (
//                     <div style={{height: (height - 32) + 'px'}}>
//                         <i className='icon font_family icon-pic-empty empty-icon-style'></i>
//                         <div>暂无数据</div>
//                         <div style={{marginTop: '20px'}}>
//                             <Button loading={loading} type="primary"
//                                     onClick={() => this.props.emptyBtnAction()}>{this.props.emptyBtnText}</Button>
//                         </div>
//                     </div>
//                 )
//             } else {
//                 return (
//                     <div style={{height: (height - 32) + 'px'}}>
//                         <i className='icon font_family icon-pic-empty empty-icon-style'></i>
//                         <div>暂无数据</div>
//                     </div>
//                 )
//             }
//         }

//         componentDidMount() {

//         }

//         componentWillReceiveProps = (nextProps) => {
//             if (document.getElementsByClassName('ant-table-body') && nextProps.dataSource && nextProps.dataSource.length > 0) {
//                 let height = this.props.tableBodyHeight + 'px';
//                 document.getElementsByClassName('ant-table-body')[0].style.height = height;
//                 document.getElementsByClassName('ant-table-body')[0].style.maxHeight = height;
//             } else {
//                 if (document.getElementsByClassName('ant-table-body') && this.props.dataSource.length != 0) {
//                     document.getElementsByClassName('ant-table-body')[0].style.height = 0;
//                 }
//             }
//         }

//         render() {
//             const {components, tableBodyHeight} = this.props;
//             return <WrappedComponent
//                 {...this.props}
//                 components={components ? components : {body: {}}}
//                 locale={{emptyText: () => this.emptyText(tableBodyHeight)}}
//             />;
//         }
//     };
export default EmptyTableHOC;



// export default HOC;
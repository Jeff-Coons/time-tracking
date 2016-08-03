// import React from 'react'
//
// /**
//  * Input Component For Start and Stop Time
//  * @param { object } - props passed through from day component
//  * @param { string } - props.time - if viewing the previous week the set the value to the time passed from teamwork
//  * @return - An input field to save our time to teamwork
//  */
// export default class Input extends React.Component {
//     constructor (props) {
//         super(props)
//
//         this.handleOnChange = this.handleOnChange.bind(this);
//         this.handleOnFocus = this.handleOnFocus.bind(this);
//         this.handleOnBlur = this.handleOnBlur.bind(this);
//     }
//
//     handleOnFocus () {}
//
//     handleOnBlur () {}
//
//     handleOnChange (event) {
//         this.setState({
//             time: this.props.time = event.target.value
//         })
//     }
//
//     render () {
//         return (
//             <div className="TimeStamp-Input">
//                 <input
//                     type='text'
//                     value={this.props.time}
//                     week={this.props.week}
//                     date={this.props.date}
//                     onBlur={this.handleOnBlur}
//                     onFocus={this.hndleOnFocus}
//                     onChange={this.handleOnChange}
//                 />
//             </div>
//         );
//     }
// }
//
// Input.propTypes = {
//     time: React.PropTypes.string
// }
//
// Input.defaultProps = {
//     time: ''
// }

import * as React from 'react';

export default class FormWrap extends React.Component<any, any> {
  requestId: number;
  state = { form: '' }

  componentDidMount() {
    this.handleScroll();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }

  handleScroll = () => {
    this.requestId = window.requestAnimationFrame(this.handleScroll);
    const side = document.querySelector('#detail-side').clientHeight;
    const wrap = document.querySelector('#detail-wrap').clientHeight;
    const diff = wrap - side;
    const top = 54;
    if (window.scrollY <= top && this.state.form !== '') {
      return this.setState({ form: '' });
    }
    if (window.scrollY > top && window.scrollY < diff && this.state.form !== 'fixed') {
      return this.setState({ form: 'fixed' });
    }
    if (window.scrollY >= diff && this.state.form !== 'absolute') {
      return this.setState({ form: 'absolute' });
    }
  }

  render() {
    return (
      <div id="detail-wrap" className="detail-form">
        <div id="detail-side" className={`${this.state.form}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

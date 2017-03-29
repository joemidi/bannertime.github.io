import React, { Component } from 'react';

export default class Gitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };

    this._recalculate = this._recalculate.bind(this);
  }

  render() {
    const { offset } = this.state;

    return (
      <span className="gitter">
        <div
          className="gitter__button js-gitter-toggle-chat-button"
          style={{
            marginBottom: offset
          }}>
          <i className="gitter__icon icon-gitter" />
        </div>
      </span>
    );
  }

  componentDidMount() {
    setTimeout(
      this._recalculate,
      250
    );

    document.addEventListener(
      'scroll',
      this._recalculate
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'scroll',
      this._recalculate
    );
  }

  _recalculate(e) {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;
    const distToBottom = scrollHeight - scrollY - innerHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;

    this.setState({
      offset: distToBottom < footerHeight ? footerHeight - distToBottom : 0
    });
  }
}
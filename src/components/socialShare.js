import * as React from "react"

function copyToClipboard(){
    var shareInput = document.createElement('input'),
        text = window.location.href;

    document.body.appendChild(shareInput);
    shareInput.value = text;
    shareInput.select();
    document.execCommand('copy');
    document.body.removeChild(shareInput);
}

class SocialShare extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'social-share mb-4 mb-md-5'}>
                <div className={'row'}>
                    <div className={'col-auto px-2'}>
                        <a target={'_blank'}
                           href={'https://www.facebook.com/sharer/sharer.php?u='+this.props.url}>
                            <i className={'icon-facebook'}></i></a>
                    </div>
                    <div className={'col-auto px-2'}>
                        <a target={'_blank'}
                           href={'https://twitter.com/intent/tweet?text='+this.props.title+'&url='+this.props.url}>
                            <i className={'icon-twitter'}></i></a>
                    </div>
                    <div className={'col-auto px-2'}>
                        <a target={'_blank'}
                           href={'https://t.me/share/url?url='+this.props.url+'&text='+this.props.title}>
                            <i className={'icon-telegram'}></i></a>
                    </div>
                    <div className={'col-auto px-2'}>
                        <div role="button" onClick={()=>copyToClipboard()}>
                            <i className={'icon-copy'}></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SocialShare

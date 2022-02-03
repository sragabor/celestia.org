import * as React from "react"
import 'react-multi-carousel/lib/styles.css';

import {FooterBoxes} from "../datas/resources/content";

import Layout from "../components/layout";
import {alphabets} from "../datas/glossary/alphabets";
import {glossaries} from "../datas/glossary/data";
import {Link} from "gatsby";
import {useState} from "react";

class Result extends React.Component {
    render() {
        return (
            <li className={'row result'}>
                <Link to={`/glossary/${this.props.result.url}`}>
                        <div className={'col-12'}>
                            <div className={'title'}>{this.props.result.title}</div>
                            {this.props.result.text}
                        </div>
                </Link>
            </li>
        )
    }
}

function GetGlossaries(props){
    const [search, toggleSearch] = useState(false)
    const [expand, toggleExpand] = useState(false)
    return (
        <div>
            <div className={search ? 'opened' : 'closed'}>
                <div className={'row justify-content-between mt-5'}>
                    <div className={'col-auto search-bar'}>
                        <div className={'alphabets search'} role={'button'} tabIndex={0} onClick={() => toggleSearch(true )} onKeyDown={() => toggleSearch(true )}>
                            <ul className={'list-group list-group-horizontal'}>
                                <li className={'list-group-item px-0'}>
                                    <input type="text" className={'form-control float-start'}/>
                                    <i className={'icon-search float-end'}></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={expand ? 'col char-bar expanded' : 'col char-bar'}>
                        <div className={'col-inner'}>
                            <div className={'alphabets float-end'}>
                                <ul className={'list-group list-group-horizontal'}>
                                    <li className={'list-group-item expand'} role={'button'} tabIndex={0} onClick={() => toggleSearch(false)} onKeyDown={() => toggleSearch(false )}><i className={'icon-dropdown'} aria-label={'Hide search'}></i></li>
                                    {alphabets.map(alpha => (
                                        <li className={props.alpha == alpha ? 'list-group-item active' : 'list-group-item'} key={alpha}>
                                            <Link to={`/glossary#${alpha}`} state={{ alpha: alpha }}>{alpha}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={'alpha-expand only-mobile'} role={'button'} tabIndex={0} onClick={() => toggleExpand(!expand)} onKeyDown={() => toggleExpand(!expand )}><i className={'icon-dropdown'} aria-label="Expand search"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'results'}>
            {glossaries.map((glossary,index) => Object.keys(glossary) == props.alpha &&
                <div className={'row alpha-row'} key={Object.keys(glossary)}>
                    <div className={'col-12'}>
                        <div className={'row'}>
                            <div className={'col-12 col-md-2'}>
                                <div className={'alpha'}>{Object.keys(glossary)}</div>
                            </div>
                            <div className={'col-12 col-md-10'}>
                                <ul className={'result-list'}>
                                    {Object.values(glossary)[0].map(result => (
                                        <Result key={result.title} result={result}/>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>)
}

class GlossaryPage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-page'}>
                    <main>
                        <div className={'container'}>
                            <h1 className={'main'}>Glossary</h1>

                            <GetGlossaries alpha={(this.props.location.state && this.props.location.state.alpha) ? this.props.location.state.alpha : 'A'}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossaryPage

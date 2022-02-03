import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";

const title = 'Ad Hoc';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>Active management (or active investing) refers to a strategy deployed by fund managers or brokers where they trade financial assets aiming to profit from both bull and bear markets. Typically, active managers seek market inefficiencies, hoping that their positions reach a target return or outperform a particular index, such as the S&P500.
                </p>

                <p>On an individual level, active management is simply the act of buying and selling assets frequently, based on seemingly good market opportunities that arise. On a broader context, however, active management relates to a group of managers or brokers that try to make profits by trading a select group of assets.
                </p>

                <p>Normally, active management is based on analytical research and investment decisions. As such, active managers believe they can somehow outperform the market. This idea goes against the efficient-market hypothesis (EMH), which implies that the current price of an asset already reflects all information available, meaning there aren’t many inefficiencies to be exploited.
                </p>

                <p>Therefore, the success rate of an active investing strategy is heavily dependent on the subjective interpretation of its managers and, thus, on their ability to successfully predict the market. Active managers need to follow the market trends closely, so they can increase their chances of making profitable trades.
                </p>

                <p>In contrast to active management, there is the passive investing strategy (also known as indexing). In short, it consists of building a long-term investment portfolio that won’t be actively traded. Instead, the managers or brokers will build a portfolio that is usually based on the performance of an index. This means that passive management is relatively free from human error in regards to the selection of assets. Indexing strategies are often associated with mutual and exchange-traded funds (ETF).
                    Since active management involves more trading costs and risks, it normally has much higher management fees than passive management strategies. Historically, indexing strategies performed better than active investing, which might explain the recent increase in interest in passive management.
                </p>
            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BodyLink = props =>(
    <a target="_blank" rel="noopener noreferrer" href={props.href} style={{ textDecoration: `none`, fontWeight: `bold`, color: `#000`, }}>{props.children}</a>
)

//https://github.com/kangpeter5/react-hooks-todo-app
//https://github.com/kangpeter5/react-timer-hook

const DoPomoApp = () => (
    <Layout>
        <SEO title="DoPomo" keywords={[`javascript`, `react`, `html`, `css`, `productivity`, `js`, `es6`, `pomodoro`, `to-do`, ]} />
    </Layout>
)

export default DoPomoApp
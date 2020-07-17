import React from "react"

import Alert from "./Alert"
import Avatar from "./Avatar"
import Badge from "./Badge"
import Break from "./Break"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Buttons from "./Buttons"
import Card from "./Card"
import CheckBox from "./CheckBox"
import Chip from "./Chip"
import Code from "./Code"
import Continue from "./Continue"
import Ctx from "./Ctx"
import Debug from "./Debug"
import Divider from "./Divider"
import ElemDecode from "./ElemDecode"
import Error from "./Error"
import Flow from "./Flow"
import FluentSyntax from "./FluentSyntax"
import FontAsset from "./FontAsset"
import FontTag from "./FontTag"
import Grid from "./Grid"
import Heading from "./Heading"
import Icon from "./Icon"
import Image from "./Image"
import Input from "./Input"
import InputRaw from "./InputRaw"
import Item from "./Item"
import ItemAction from "./ItemAction"
import Link from "./Link"
import List from "./List"
import Loading from "./Loading"
import Markdown from "./Markdown"
import QRCode from "./QRCode"
import Search from "./Search"
import SignIn from "./SignIn"
import Spacer from "./Spacer"
import Splash from "./Splash"
import Status from "./Status"
import Step from "./Step"
import Switch from "./Switch"
import Table from "./Table"
import Template from "./Template"
import Text from "./Text"
import TextBox from "./TextBox"
import ThemePreview from "./ThemePreview"
import Time from "./Time"
import TypedText from "./TypedText"
import TypeMethod from "./TypeMethod"

// Dynamic Component Loading
// const Loading = dynamic(() => import("./Loading"), {})
// const QRCode = dynamic(() => import("./QRCode"), {
//   loading: () => <p>Loading...</p>,
// })
// const StripeCard = dynamic(() => import("./Payment/StripeCard"))

const renderMap = {
  alert: props => <Alert {...props} />,
  avatar: props => <Avatar {...props} />,
  badge: props => <Badge {...props} />,
  break: props => <Break {...props} />,
  button: props => <Button {...props} />,
  //buttongroup: props => <ButtonGroup {...props} />,
  // buttons: props => <Buttons {...props} />,
  // calendlyForm: props => <Calendly {...props} />,
  // card: props => <Card {...props} />,
  // checkbox: props => <CheckBox {...props} />,
  // chip: props => <Chip {...props} />,
  // code: props => <Code {...props} />,
  continue: props => <Continue {...props} />,
  ctx: props => <Ctx {...props} />,
  // date: props => <Debug {...props} />,
  debug: props => <Debug {...props} />,
  divider: props => <Divider {...props} />,
  error: props => <Error {...props} />,
  // //faq: props => <Faq {...props} />,
  // flow: props => <Flow {...props} />,
  // fontasset: props => <FontAsset {...props} />,
  // fonttag: props => <FontTag {...props} />,
  // form: props => <Debug {...props} />,
  grid: props => <Grid {...props} />,
  // headerimage: props => <HeaderImage {...props} />,
  heading: props => <Heading {...props} />,
  // hero: props => <Debug {...props} />,
  // icon: props => <Icon {...props} />,
  // image: props => <Image {...props} />,
  // input: props => <Input {...props} />,
  // item: props => <Item {...props} />,
  // itemaction: props => <ItemAction {...props} />,
  link: props => <Link {...props} />,
  list: props => <List {...props} />,
  loading: props => <Loading {...props} />,
  // loginForm: props => <SignIn {...props} />,
  // //loginprocess: props => <LoginProcess {...props} />,
  // markdown: props => <Markdown {...props} />,
  // // profile: props => <Profile {...props} />,
  // //progress: props => <Progress {...props} />,
  qrcode: props => <QRCode {...props} />,
  // search: props => <Search {...props} />,
  // secureInput: props => <Input {...props} />,
  // //sharenotice: props => <ShareNotice {...props} />,
  // spacer: props => <Spacer {...props} />,
  // splash: props => <Splash {...props} />,
  // step: props => <Step {...props} />,
  // status: props => <Status {...props} />,
  // stripecard: props => <StripeCard {...props} />,
  // syntax: props => <FluentSyntax {...props} />,
  // table: props => <Table {...props} />,
  // //tabs: props => <Tabs {...props} />,
  // template: props => <Template {...props} />,
  text: props => <Text {...props} />,
  // textbox: props => <TextBox {...props} />,
  // textfield: props => <InputRaw {...props} />,
  // theme: props => <ThemePreview {...props} />,
  // time: props => <Time {...props} />,
  // switch: props => <Switch {...props} />,
  // typemethod: props => <TypeMethod {...props} />,
  typing: props => <TypedText {...props} />,
}

export default renderMap

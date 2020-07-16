import React from "react";

import { AlertTriangle, Edit2 } from "react-feather";
import { ArrowRight } from "react-feather";
import { Book } from "react-feather";
import { Box } from "react-feather";
import { Calendar } from "react-feather";
import { PhoneIncoming } from "react-feather";
import { Camera } from "react-feather";
import { Check } from "react-feather";
import { CheckSquare } from "react-feather";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";
import { Circle } from "react-feather";
import { Clock } from "react-feather";
import { Code } from "react-feather";
import { Coffee } from "react-feather";
import { CreditCard } from "react-feather";
import { DollarSign } from "react-feather";
import { Edit } from "react-feather";
import { Flag } from "react-feather";
import { Folder } from "react-feather";
import { Frown } from "react-feather";
import { Gift } from "react-feather";
import { Grid } from "react-feather";
import { Hash } from "react-feather";
import { Heart } from "react-feather";
import { HelpCircle } from "react-feather";
import { Home } from "react-feather";
import { Image } from "react-feather";
import { Inbox } from "react-feather";
import { Info } from "react-feather";
import { Link } from "react-feather";
import { List } from "react-feather";
import { Lock } from "react-feather";
import { LogIn } from "react-feather";
import { LogOut } from "react-feather";
import { Mail } from "react-feather";
import { MapPin } from "react-feather";
import { Meh } from "react-feather";
import { MessageSquare } from "react-feather";
import { Mic } from "react-feather";
import { MicOff } from "react-feather";
import { Minus } from "react-feather";
import { Monitor } from "react-feather";
import { MoreVertical } from "react-feather";
import { MoreHorizontal } from "react-feather";
import { Pause } from "react-feather";
import { Phone } from "react-feather";
import { Play } from "react-feather";
import { Plus } from "react-feather";
import { RefreshCcw } from "react-feather";
import { Save } from "react-feather";
import { Search } from "react-feather";
import { Server } from "react-feather";
import { Settings } from "react-feather";
import { Share2 } from "react-feather";
import { ShoppingBag } from "react-feather";
import { ShoppingCart } from "react-feather";
import { Smartphone } from "react-feather";
import { Smile } from "react-feather";
import { Square } from "react-feather";
import { Star } from "react-feather";
import { Tablet } from "react-feather";
import { Terminal } from "react-feather";
import { ThumbsDown } from "react-feather";
import { ThumbsUp } from "react-feather";
import { ToggleLeft } from "react-feather";
import { ToggleRight } from "react-feather";
import { Trash } from "react-feather";
import { Unlock } from "react-feather";
import { UploadCloud } from "react-feather";
import { User } from "react-feather";
import { UserCheck } from "react-feather";
import { UserMinus } from "react-feather";
import { UserPlus } from "react-feather";
import { Users } from "react-feather";
import { Volume } from "react-feather";
import { VolumeX } from "react-feather";
import { X } from "react-feather";
import { XSquare } from "react-feather";
import { Zap } from "react-feather";
import { ZapOff } from "react-feather";

const IC = {
  alert: (size, color) => <AlertTriangle size={size} color={color} />,
  arrowright: (size, color) => <ArrowRight size={size} color={color} />,
  book: (size, color) => <Book size={size} color={color} />,
  box: (size, color) => <Box size={size} color={color} />,
  calendar: (size, color) => <Calendar size={size} color={color} />,
  callback: (size, color) => <PhoneIncoming size={size} color={color} />,
  camera: (size, color) => <Camera size={size} color={color} />,
  chat: (size, color) => <MessageSquare size={size} color={color} />,
  check: (size, color) => <Check size={size} color={color} />,
  checksquare: (size, color) => <CheckSquare size={size} color={color} />,
  chevrondown: (size, color) => <ChevronDown size={size} color={color} />,
  chevronup: (size, color) => <ChevronUp size={size} color={color} />,
  circle: (size, color) => <Circle size={size} color={color} />,
  clock: (size, color) => <Clock size={size} color={color} />,
  code: (size, color) => <Code size={size} color={color} />,
  coffee: (size, color) => <Coffee size={size} color={color} />,
  creditcard: (size, color) => <CreditCard size={size} color={color} />,
  delete: (size, color) => <X size={size} color={color} />,
  deletesquare: (size, color) => <XSquare size={size} color={color} />,
  dollarsign: (size, color) => <DollarSign size={size} color={color} />,
  edit: (size, color) => <Edit2 size={size} color={color} />,
  flag: (size, color) => <Flag size={size} color={color} />,
  folder: (size, color) => <Folder size={size} color={color} />,
  frown: (size, color) => <Frown size={size} color={color} />,
  gift: (size, color) => <Gift size={size} color={color} />,
  grid: (size, color) => <Grid size={size} color={color} />,
  hash: (size, color) => <Hash size={size} color={color} />,
  heart: (size, color) => <Heart size={size} color={color} />,
  help: (size, color) => <HelpCircle size={size} color={color} />,
  home: (size, color) => <Home size={size} color={color} />,
  image: (size, color) => <Image size={size} color={color} />,
  inbox: (size, color) => <Inbox size={size} color={color} />,
  info: (size, color) => <Info size={size} color={color} />,
  link: (size, color) => <Link size={size} color={color} />,
  list: (size, color) => <List size={size} color={color} />,
  location: (size, color) => <MapPin size={size} color={color} />,
  lock: (size, color) => <Lock size={size} color={color} />,
  login: (size, color) => <LogIn size={size} color={color} />,
  logout: (size, color) => <LogOut size={size} color={color} />,
  mail: (size, color) => <Mail size={size} color={color} />,
  meh: (size, color) => <Meh size={size} color={color} />,
  mic: (size, color) => <Mic size={size} color={color} />,
  micoff: (size, color) => <MicOff size={size} color={color} />,
  minus: (size, color) => <Minus size={size} color={color} />,
  minus: (size, color) => <Minus size={size} color={color} />,
  monitor: (size, color) => <Monitor size={size} color={color} />,
  more: (size, color) => <MoreVertical size={size} color={color} />,
  morehorizontal: (size, color) => <MoreHorizontal size={size} color={color} />,
  mute: (size, color) => <VolumeX size={size} color={color} />,
  offline: (size, color) => <ZapOff size={size} color={color} />,
  online: (size, color) => <Zap size={size} color={color} />,
  pause: (size, color) => <Pause size={size} color={color} />,
  phone: (size, color) => <Phone size={size} color={color} />,
  play: (size, color) => <Play size={size} color={color} />,
  plus: (size, color) => <Plus size={size} color={color} />,
  refresh: (size, color) => <RefreshCcw size={size} color={color} />,
  save: (size, color) => <Save size={size} color={color} />,
  search: (size, color) => <Search size={size} color={color} />,
  server: (size, color) => <Server size={size} color={color} />,
  settings: (size, color) => <Settings size={size} color={color} />,
  share: (size, color) => <Share2 size={size} color={color} />,
  shoppingbag: (size, color) => <ShoppingBag size={size} color={color} />,
  shoppingcart: (size, color) => <ShoppingCart size={size} color={color} />,
  smartphone: (size, color) => <Smartphone size={size} color={color} />,
  smile: (size, color) => <Smile size={size} color={color} />,
  square: (size, color) => <Square size={size} color={color} />,
  star: (size, color) => <Star size={size} color={color} />,
  tablet: (size, color) => <Tablet size={size} color={color} />,
  terminal: (size, color) => <Terminal size={size} color={color} />,
  thumbsdown: (size, color) => <ThumbsDown size={size} color={color} />,
  thumbsup: (size, color) => <ThumbsUp size={size} color={color} />,
  toggleleft: (size, color) => <ToggleLeft size={size} color={color} />,
  toggleright: (size, color) => <ToggleRight size={size} color={color} />,
  trash: (size, color) => <Trash size={size} color={color} />,
  unlock: (size, color) => <Unlock size={size} color={color} />,
  upload: (size, color) => <UploadCloud size={size} color={color} />,
  user: (size, color) => <User size={size} color={color} />,
  usercheck: (size, color) => <UserCheck size={size} color={color} />,
  userminus: (size, color) => <UserMinus size={size} color={color} />,
  userplus: (size, color) => <UserPlus size={size} color={color} />,
  users: (size, color) => <Users size={size} color={color} />,
  volume: (size, color) => <Volume size={size} color={color} />
};

const sizeMap = {
  tiny: 20,
  small: 36,
  medium: 48,
  large: 72,
  huge: 128
};

export default function EngageIcon(props) {
  const { icon, size = 36, color } = props;
  // size it
  let S = size;
  if (typeof S === "string") S = sizeMap[S];

  if (!IC[icon]) return <Circle size={S} color={"#D0D0D0"} />;
  else return IC[icon](S, color);
}

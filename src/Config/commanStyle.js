import {StyleSheet} from 'react-native';
import AppStyle from './AppStyle';

export default StyleSheet.create({
  btnSubmit: {
    width: '100%',
    height: AppStyle.countPixelRatio(51.3),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: AppStyle.countPixelRatio(5),
    marginTop: AppStyle.countPixelRatio(14),
  },
  btnText: {
    color: 'white',
    fontSize: AppStyle.fontSizeParagraph,
    fontFamily: AppStyle.fontSemiBold,
  },
  title: {
    fontSize: AppStyle.fontSizeH1,
    color: AppStyle.COLOR.darkIndigo,
    fontWeight: 'bold',
    marginTop: AppStyle.countPixelRatio(13),
    fontFamily: AppStyle.fontExtraBold,
  },
  subTitle: {
    fontSize: AppStyle.fontSizeH4,
    color: AppStyle.COLOR.slateGrey,
    fontFamily: AppStyle.fontRegular,
  },
  codestyle: {
    color: AppStyle.COLOR.darkSkyBlue,
    fontSize: AppStyle.fontSizeParagraph,
  },
  codestyleView: {
    marginTop: AppStyle.countPixelRatio(4),
  },
  forgetView: {
    flexDirection: 'row',
    marginTop: AppStyle.countPixelRatio(10),
    marginBottom: AppStyle.countPixelRatio(15),
    justifyContent: 'center',
  },
  forgetText: {
    color: AppStyle.COLOR.coolGrey,
    fontSize: AppStyle.fontSizeH4_5,
    fontFamily: AppStyle.fontSemiBold,
  },
  forgetLink: {
    color: AppStyle.COLOR.darkSkyBlue,
    fontSize: AppStyle.fontSizeH4_5,
    fontFamily: AppStyle.fontSemiBold,
  },
  backLogo: {
    marginTop: AppStyle.countPixelRatio(25),
    height: AppStyle.countPixelRatio(20),
    width: AppStyle.countPixelRatio(12),
  },
});

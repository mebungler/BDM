import React from 'react';
import {View, StyleSheet} from 'react-native';
import {commonStyles, Icons, colors} from '../../constants';
import Text from '../../components/common/CustomText';
import {strings} from '../../locales/strings';

export interface DocumentProps {
  id: string;
  number: string;
  date: string;
  name: string;
  amount: string;
  type: string;
  sent: string;
  signed: string;
  inn: string;
}

const Document: React.FC<DocumentProps> = ({
  date,
  number,
  id,
  name,
  ...rest
}) => {
  return (
    <View style={[commonStyles.shadow, styles.container]}>
      <View style={styles.row}>
        <Icons name={'stop'} color={colors.red} size={32} />
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.secondaryText}>{id}</Text>
          <Text style={styles.secondaryText}>{`${date}   ${number}`}</Text>
        </View>
      </View>
      <Text style={styles.title}>{name}</Text>
      <View>
        {Object.keys(rest).map((e, i) => (
          <View
            key={i}
            style={[
              styles.row,
              i !== Object.keys(rest).length - 1 && {
                borderBottomWidth: 1,
                borderBottomColor: colors.ultraLightGray,
              },
            ]}>
            <Text style={styles.regularText}>{strings[e]}</Text>
            <Text style={styles.regularText}>{rest[e]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  secondaryText: {
    color: colors.gray,
    fontWeight: '100',
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    color: colors.blue,
    fontSize: 20,
  },
  regularText: {
    fontWeight: '400',
    color: colors.black,
    fontSize: 16,
  },
});

export default Document;

import React from 'react';
import {Button, Pressable, Text} from 'react-native';
import {styles} from './Button.styles';

export const PrimaryButton = (props: {title: string}) => {
  const {title} = props;
  return <Button title={title} />;
};

export const OutlineButton = (props: {title: string}) => {
  const {title} = props;

  return (
    <Pressable style={styles.Oultline}>
      <Text style={styles.Outline__Text}>{title}</Text>
    </Pressable>
  );
};

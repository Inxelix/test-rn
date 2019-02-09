import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';
import {
	RegFieldsWrapper,
	LoginField,
	PasswordField,
	RegFieldsInput,
	RegFieldsUnderline,
} from '../../../components';
import {
	ConfirmPasswordField,
} from '../components'


export class RegField extends PureComponent<Props> {
	state = {
		loginText: '',
		passwordText: '',
		confirmPasswordText: '',
	};

	onFieldTextChange = (text, fieldName) => {
		this.setState({
			[fieldName]: text,
		});
	};

	onSubmit = () => {
		const { onChange } = this.props;
		const { loginText } = this.state;
	};

	render() {
		const { 
			loginText,
			passwordText,
			confirmPasswordText,
		} = this.state;

		const {	fieldAmount } = this.props;

		return (
			<RegFieldsWrapper
				style={{
					height: fieldAmount * verticalScale(50),
				}}
			>
				<LoginField>
					<RegFieldsInput
						selectionColor={colors.primaryColor}
						autoCorrect={false}
						value={loginText}
						onChangeText={(text) => this.onFieldTextChange(text, 'loginText')}
						onSubmitEditing={this.onSubmit}
						placeholder="Введите логин"
					/>
				</LoginField>

				<RegFieldsUnderline />

				<PasswordField>
					<RegFieldsInput
						selectionColor={colors.primaryColor}
						autoCorrect={false}
						value={passwordText}
						onChangeText={(text) => this.onFieldTextChange(text, 'passwordText')}
						placeholder="Введите пароль"
					/>
				</PasswordField>

				<RegFieldsUnderline />

				<ConfirmPasswordField>
					<RegFieldsInput
						selectionColor={colors.primaryColor}
						autoCorrect={false}
						value={confirmPasswordText}
						onChangeText={(text) => this.onFieldTextChange(text, 'confirmPasswordText')}
						placeholder="Подтвердите пароль"
					/>
				</ConfirmPasswordField>
			</RegFieldsWrapper>
		);
	}
}

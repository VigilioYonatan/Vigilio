// `${enviroments.PAYPAL_CLIENT_ID}:${enviroments.PAYPAL_SECRET_KEY}`
export interface AccessTokenAPI {
	scope: string;
	access_token: string;
	token_type: string;
	app_id: string;
	expires_in: number;
	nonce: string;
}
export interface CreateOrderProps {
	intent: "CAPTURE" | "AUTHORIZE";
	purchase_units: [
		{
			amount: {
				currency_code: string;
				value: string;
				breakdown?: {
					item_total: { value: string; currency_code: string };
					shopping: { value: string; currency_code: string };
					handling: { value: string; currency_code: string };
					tax_total: { value: string; currency_code: string };
					insurance: { value: string; currency_code: string };
					shipping_discount: { value: string; currency_code: string };
					discount: { value: string; currency_code: string };
				};
			};
			reference_id?: string;
			description?: string;
			custom_id?: string;
			invoice_id?: string;
			soft_descriptor?: string;
			items?: {
				name: string;
				quantity: number;
				description?: string;
				sku?: string;
				url?: string;
				category?: string;
				image_url?: string;
				unit_amount: { value: string; currency_code: string };
				tax?: { value: string; currency_code: string };
				upc: { type: string; code: string };
				amount: {
					currency_code: string;
					value: string;
					breakdown?: {
						item_total: { value: string; currency_code: string };
						shopping: { value: string; currency_code: string };
						handling: { value: string; currency_code: string };
						tax_total: { value: string; currency_code: string };
						insurance: { value: string; currency_code: string };
						shipping_discount: {
							value: string;
							currency_code: string;
						};
						discount: { value: string; currency_code: string };
					};
				};
			}[];
		},
	];
	payeer?: { email_address?: string; merchant_id?: string };
	application_context: {
		brand_name?: string;
		landing_page?: string;
		shipping_preference?:
			| "GET_FROM_FILE"
			| "NO_SHIPPING"
			| "SET_PROVIDED_ADDRESS";
		user_action?: "CONTINUE" | "PAY_NOW";
		return_url?: string;
		cancel_url?: string;
		locale?: string;
		payment_method?: {
			standard_entry_class_code?: "TEL" | "WEB" | "CCD" | "PPD";
			payee_preferred?: "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED";
		};
		stored_payment_source?: {
			payment_initiator?: "CUSTOMER" | "MERCHANT";
			payment_type?: "ONE_TIME" | "RECURRING" | "UNSCHEDULED";
			usage?: "FIRST" | "SUBSEQUENT" | "DERIVED";
			previous_network_transaction_reference?: object;
		};
	};
}
export type Network =
	| "VISA"
	| "MASTERCARD"
	| "DISCOVER"
	| "AMEX"
	| "SOLO"
	| "JCB"
	| "STAR"
	| "DELTA"
	| "SWITCH"
	| "MAESTRO"
	| "CB_NATIONALE"
	| "CONFIGOCA"
	| "CONFIDIS"
	| "ELECTRON"
	| "CETELEM"
	| "CHINA_UNION_PAY"
	| "DINERS"
	| "ELO"
	| "HIPER"
	| "HIPERCARD"
	| "RUPAY"
	| "GE"
	| "SYNCHRONY"
	| "UNKNOWN";
export type ExperienceContext = {
	brand_name?: string;
	shipping_preference?:
		| "GET_FROM_FILE"
		| "NO_SHIPPING"
		| "SET_PROVIDED_ADDRESS";
	landing_page?: "LOGIN" | "GUEST_CHECKOUT" | "NO_PREFERENCE";
	user_action?: "CONTINUE" | "PAY_NOW";
	payment_method_preference?: "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED";
	locale?: string;
	return_url?: string;
	cancel_url?: string;
};
export interface UpdateOrderProps {
	op: "add" | "remove" | "replace" | "move" | "copy" | "test";
	path?: string;
	value?: unknown;
	from?: string;
}
export interface ConfirmOrderProps {
	processing_instruction?:
		| "ORDER_COMPLETE_ON_PAYMENT_APPROVAL"
		| "NO_INSTRUCTION";
	application_context: {
		brand_name?: string;
		return_url?: string;
		cancel_url?: string;
		locale?: string;
		stored_payment_source?: {
			payment_initiador: "CUSTOMER" | "MERCHANT";
			payment_type: "ONE_TIME" | "RECURRING" | "UNSCHEDULED";
			usage?: string;
			previous_network_transaction_reference?: {
				id: string;
				date?: string;
				acquirer_reference_number: string;
				network?: Network;
			};
		};
	};
	payment_source: {
		card?: {
			name?: string;
			number?: string;
			security_code?: string;
			expiry?: string;
			billing_address?: {
				address_line_1?: string;
				address_line_2?: string;
				admin_area_1?: string;
				admin_area_2?: string;
				postal_code?: string;
				country_code: string;
			};
			attributes?: {
				customer?: {
					id: string;
					email_address: string;
					phone: {
						phone_type?: "FAX" | "HOME" | "MOBILE" | "PAGER" | "OTHER";
						phone_number: {
							national_number: string;
						};
					};
					vault?: { store_in_vault: string };
					verification?: {
						method?:
							| "SCA_ALWAYS"
							| "SCA_WHEN_REQUIRED"
							| "3D_SECURE"
							| "AVS_CVV";
					};
				};
			};
			stored_credential?: {
				payment_intiiador: "CUSTOMER" | "MERCHANT";
				payment_type: "ONE_TIME" | "RECURRING" | "UNSCHEDULED";
				usage?: "FIRST" | "SUBSEQUIENT";
				previous_network_transaction_reference?: {
					id: string;
					date?: string;
					acquirer_reference_number?: string;
					network?: Network;
				};
			};
			vault_id?: string;
			network_token?: {
				number: string;
				cryptogram?: string;
				token_requestor_id?: string;
				expiry: string;
				eci_flag?:
					| "MASTERCARD_NON_3D_SECURE_TRANSACTION"
					| "MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "FULLY_AUTHENTICATED_TRANSACTION"
					| "ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "NON_3D_SECURE_TRANSACTION";
			};
			experience_context?: {
				return_url?: string;
				cancel_url?: string;
			};
		};
		token?: { id: string; type: "BILLING_AGREEMENT" };
		paypal?: {
			experience_context?: ExperienceContext;
			billing_agreement_id?: string;
			vault_id: string;
			email_address: string;
			name: { given_name?: string; surname?: string };
			phone?: {
				phone_type?: "FAX" | "HOME" | "MOBILE" | "OTHER";
				phone_number: { national_number: string };
			};
			birth_date?: string;
			tax_info?: { tax_id: string; tax_id_type: "BR_CPF" | "BR_CNPJ" };
			address?: object;
			attributes: object;
		};
		bankcontact?: {
			name: string;
			country_code: string;
			experience_context?: string;
		};
		blik?: {
			name: string;
			country_code: string;
			email?: string;
			experience_context?: {
				brand_name?: string;
				shipping_preference?:
					| "GET_FROM_FILE"
					| "NO_SHIPPING"
					| "SET_PROVIDED_ADDRESS";
				locale?: string;
				return_url?: string;
				cancel_url?: string;
			};
			level_0?: { auth_code: string };
			one_click: {
				auth_code?: string;
				customer_reference: string;
				alias_label?: string;
				alias_key?: string;
			};
		};
		eps?: {
			name: string;
			country_code: string;
			bic?: string;
			experience_context?: ExperienceContext;
		};
		mybank?: {
			name: string;
			country_code: string;
			experience_context?: ExperienceContext;
		};
		p24?: {
			name: string;
			email: string;
			country_code: string;
			experience_context?: ExperienceContext;
		};
		sofort?: {
			name: string;
			country_code: string;
			experience_context?: ExperienceContext;
		};
		apple_pay?: {
			id?: string;
			stored_credential?: object;
			name?: string;
			email_address?: string;
			phone_number?: object;
			decrypted_token?: object;
			vault_id?: string;
		};
		venmo?: {
			experience_context?: ExperienceContext;
			vault_id?: string;
			email_address?: string;
			attributes?: object;
		};
	};
}
export interface CaptureOrderProps {
	payment_source: {
		card?: {
			name?: string;
			number?: string;
			security_code?: string;
			expiry?: string;
			billing_address?: {
				address_line_1?: string;
				address_line_2?: string;
				admin_area_1?: string;
				admin_area_2?: string;
				postal_code?: string;
				country_code: string;
			};
			attributes?: {
				customer?: {
					id: string;
					email_address: string;
					phone: {
						phone_type?: "FAX" | "HOME" | "MOBILE" | "PAGER" | "OTHER";
						phone_number: {
							national_number: string;
						};
					};
					vault?: { store_in_vault: string };
					verification?: {
						method?:
							| "SCA_ALWAYS"
							| "SCA_WHEN_REQUIRED"
							| "3D_SECURE"
							| "AVS_CVV";
					};
				};
			};
			stored_credential?: {
				payment_intiiador: "CUSTOMER" | "MERCHANT";
				payment_type: "ONE_TIME" | "RECURRING" | "UNSCHEDULED";
				usage?: "FIRST" | "SUBSEQUIENT";
				previous_network_transaction_reference?: {
					id: string;
					date?: string;
					acquirer_reference_number?: string;
					network?: Network;
				};
			};
			vault_id?: string;
			network_token?: {
				number: string;
				cryptogram?: string;
				token_requestor_id?: string;
				expiry: string;
				eci_flag?:
					| "MASTERCARD_NON_3D_SECURE_TRANSACTION"
					| "MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "FULLY_AUTHENTICATED_TRANSACTION"
					| "ATTEMPTED_AUTHENTICATION_TRANSACTION"
					| "NON_3D_SECURE_TRANSACTION";
			};
			experience_context?: {
				return_url?: string;
				cancel_url?: string;
			};
		};
		token?: { id: string; type: "BILLING_AGREEMENT" };
		paypal?: {
			experience_context?: ExperienceContext;
			billing_agreement_id?: string;
			vault_id: string;
			email_address: string;
			name: { given_name?: string; surname?: string };
			phone?: {
				phone_type?: "FAX" | "HOME" | "MOBILE" | "OTHER";
				phone_number: { national_number: string };
			};
			birth_date?: string;
			tax_info?: { tax_id: string; tax_id_type: "BR_CPF" | "BR_CNPJ" };
			address?: object;
			attributes: object;
		};
		apple_pay?: {
			id?: string;
			stored_credential?: object;
			name?: string;
			email_address?: string;
			phone_number?: object;
			decrypted_token?: object;
			vault_id?: string;
		};
		venmo?: {
			experience_context?: ExperienceContext;
			vault_id?: string;
			email_address?: string;
			attributes?: object;
		};
	};
}
// https://developer.paypal.com/docs/api/orders/v2/
function usePaypal(authProps: {
	client_id: string;
	secret_key: string;
	sandbox: string;
}) {
	async function accessToken() {
		const params = new URLSearchParams();
		params.append("grant_type", "client_credentials");
		const auth = btoa(`${authProps.client_id}:${authProps.secret_key}`);
		const tokenResponse = await fetch(`${authProps.sandbox}/v1/oauth2/token`, {
			method: "POST",
			body: params,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Basic ${auth}`,
			},
		});
		const tokenResult: AccessTokenAPI = await tokenResponse.json();
		const token = tokenResult.access_token;
		return token;
	}

	async function createOrder(props: CreateOrderProps) {
		const token = await accessToken();
		const response = await fetch(`${authProps.sandbox}/v2/checkout/orders`, {
			method: "POST",
			body: JSON.stringify(props),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		return result;
	}

	async function showOrder(id: string) {
		const token = await accessToken();
		const response = await fetch(
			`${authProps.sandbox}/v2/checkout/orders/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	}

	async function updateOrder(id: string, props?: UpdateOrderProps[]) {
		const token = await accessToken();
		const response = await fetch(
			`${authProps.sandbox}/v2/checkout/orders/${id}`,
			{
				method: "PATCH",
				body: JSON.stringify(props),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	}

	async function confirmOrder(id: string, props?: ConfirmOrderProps) {
		const token = await accessToken();
		const response = await fetch(
			`${authProps.sandbox}/v2/checkout/orders/${id}/confirm-payment-source`,
			{
				method: "PATCH",
				body: JSON.stringify(props),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	}
	async function authorizeOrder(id: string, props?: object) {
		const token = await accessToken();
		const response = await fetch(
			`${authProps.sandbox}/v2/checkout/orders/${id}/authorize`,
			{
				method: "POST",
				body: JSON.stringify(props),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	}
	async function captureOrder(id: string, props?: CaptureOrderProps) {
		// const auth = btoa(`${authProps.client_id}:${authProps.secret_key}`);
		const token = await accessToken();

		const response = await fetch(
			`${authProps.sandbox}/v2/checkout/orders/${id}/capture`,
			{
				method: "POST",
				body: JSON.stringify(props),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			},
		);
		const result = await response.json();
		return result;
	}
	return {
		accessToken,
		createOrder,
		showOrder,
		confirmOrder,
		authorizeOrder,
		updateOrder,
		captureOrder,
	};
}
export default usePaypal;

import { SamlOptions } from "../types";
interface GenerateServiceProviderMetadataParams {
    decryptionCert?: string | null;
    signingCerts?: string | string[] | null;
    issuer: SamlOptions["issuer"];
    callbackUrl: SamlOptions["callbackUrl"];
    logoutCallbackUrl?: SamlOptions["logoutCallbackUrl"];
    identifierFormat?: SamlOptions["identifierFormat"];
    wantAssertionsSigned: SamlOptions["wantAssertionsSigned"];
    decryptionPvk?: SamlOptions["decryptionPvk"];
    privateKey?: SamlOptions["privateKey"];
    signatureAlgorithm?: SamlOptions["signatureAlgorithm"];
    xmlSignatureTransforms?: SamlOptions["xmlSignatureTransforms"];
    digestAlgorithm?: SamlOptions["digestAlgorithm"];
    signMetadata?: SamlOptions["signMetadata"];
}
export declare const generateServiceProviderMetadata: (params: GenerateServiceProviderMetadataParams) => string;
export {};

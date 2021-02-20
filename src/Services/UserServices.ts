import Verification from '../Entities/verification/Verification';

export interface VerificationInput {
  phoneNumber?: string;
  key?: string;
}

const findVerification = (data: VerificationInput) => {
  return Verification.findOne(data);
};

const createVerification = (data: VerificationInput) => {
  return Verification.create(data).save();
};

export default { findVerification, createVerification };

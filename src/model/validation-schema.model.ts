import {
  FieldValidationFunctionSyncAsync,
  FullFieldValidation,
} from './field-validator.model';
import {
  RecordValidationFunctionSyncAsync,
  FullRecordValidation,
} from './record-validator.model';

export type FieldValidation =
  | FieldValidationFunctionSyncAsync
  | FullFieldValidation
  | { validator: FieldValidationFunctionSyncAsync }
  | { validator: FullFieldValidation };

export interface FieldValidationSchema {
  [fieldId: string]: FieldValidation[];
}

export type RecordValidation =
  | RecordValidationFunctionSyncAsync
  | FullRecordValidation
  | { validator: RecordValidationFunctionSyncAsync }
  | { validator: FullRecordValidation };

export interface RecordValidationSchema {
  [recordId: string]: RecordValidation[];
}

export interface ValidationSchema {
  field?: FieldValidationSchema;
  record?: RecordValidationSchema;
}

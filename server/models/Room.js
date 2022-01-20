import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema
// const ObjectId = mongoose.Schema.ObjectId

export const roomFields = {
  name: {
    type: String,
    required: [true, 'is required'],
  },
}

export const roomSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
}

const schema = new Schema(roomFields, roomSchemaConfig)
export default mongoose.model('room', schema)

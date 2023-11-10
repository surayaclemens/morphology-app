import mongoose, { Schema } from "mongoose";

const newsletterSubscriberSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
        trim: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

const NewsletterSubscriber = mongoose.models.NewsletterSubscriber || mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);

export default NewsletterSubscriber;
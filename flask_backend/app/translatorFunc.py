from googletrans import Translator

translator = Translator()


def translate_text(text, target_language):
    if not text or not target_language:
        raise ValueError("Text and target language are required")

    try:
        translated = translator.translate(text, dest=target_language)
        return {"original_text": text, "translated_text": translated.text}
    except Exception as e:
        raise RuntimeError(f"Translation failed: {str(e)}")

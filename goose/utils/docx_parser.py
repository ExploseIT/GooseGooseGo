from docx import Document
import html

def load_goosecoin_info_from_docx(filepath):
    doc = Document(filepath)
    html_output = ""
    in_list = False

    for para in doc.paragraphs:
        if not para.text.strip():
            continue

        style = para.style.name
        line = ""

        for run in para.runs:
            run_text = html.escape(run.text)
            if not run_text.strip():
                continue

            # Apply formatting
            if run.bold:
                run_text = f"<strong>{run_text}</strong>"
            if run.italic:
                run_text = f"<em>{run_text}</em>"
            if run.underline:
                run_text = f"<u>{run_text}</u>"

            line += run_text

        if style.startswith("Heading"):
            if in_list:
                html_output += "</ul>"
                in_list = False
            heading_level = style.replace("Heading ", "")
            html_output += f"<h{heading_level}>{line}</h{heading_level}>"

        elif style == "List Paragraph":
            if not in_list:
                html_output += "<ul>"
                in_list = True
            html_output += f"<li>{line}</li>"

        else:
            if in_list:
                html_output += "</ul>"
                in_list = False
            html_output += f"<p>{line}</p>"

    if in_list:
        html_output += "</ul>"

    return html_output

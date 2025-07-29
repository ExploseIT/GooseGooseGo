from django.core.management.base import BaseCommand
from goose.models import GooseCoinInfo
from goose.utils.docx_parser import load_goosecoin_info_from_docx

class Command(BaseCommand):
    help = "Update GooseCoinInfo content from a .docx file"

    def handle(self, *args, **kwargs):
        path = 'info/GooseCoin.docx'  # adjust if needed
        text = load_goosecoin_info_from_docx(path)

        obj, _ = GooseCoinInfo.objects.get_or_create(id=1)
        obj.content = text
        obj.save()

        self.stdout.write(self.style.SUCCESS("✅ GooseCoinInfo updated from DOCX."))

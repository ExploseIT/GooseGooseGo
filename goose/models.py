from django.db import models

class GooseCoinInfo(models.Model):
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"GooseCoinInfo last updated {self.updated}"

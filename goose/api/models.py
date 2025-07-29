# goose/models.py
class GooseCoinInfo(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    supply = models.BigIntegerField()
    updated = models.DateTimeField(auto_now=True)


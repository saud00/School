import graphene
import malal.schema

class Query(malal.schema.Query, graphene.ObjectType):
    pass


class Mutation(malal.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query , mutation=Mutation) 
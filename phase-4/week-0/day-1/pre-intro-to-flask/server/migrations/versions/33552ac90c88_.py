"""empty message

Revision ID: 33552ac90c88
Revises: c3040b56130a
Create Date: 2024-07-12 11:59:22.640019

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '33552ac90c88'
down_revision = 'c3040b56130a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('authors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_authors'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('authors')
    # ### end Alembic commands ###

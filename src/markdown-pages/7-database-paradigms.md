---
title: "7 Database Paradigms"
date: "2020-09-07"
description: "Learn about seven different database paradigms and what they do best."
---

Notes from <https://www.youtube.com/watch?v=W2Z7fbCLSTw>

# 7 Database Paradigms

1. Key-Value
2. Wide Column
3. Document
4. Relational
5. Graph
6. Search Engine
7. Multi-Model

## Key-Value

Redis, Memcached

Structed similarly to a JavaScript object or a Python dictionary.

```redis
redis> SET user:jason:bio "Loves kitties"
>> OK

redis> GET user:jason:bio
>> "Loves kitties"
```

For both redis and memcached data is held in the machine memory (i.e. RAM) and so there is no trip to retrieve it from the disk. This is fast (sub millisecond), but does limited the space available.

Best for: caching, pub/sub, leaderboards.

Often used on top of a more structured database.

Examples: twitter, Github

[How Twitter Uses Redis To Scale - 105TB RAM, 39MM QPS, 10,000+ Instances](http://highscalability.com/blog/2014/9/8/how-twitter-uses-redis-to-scale-105tb-ram-39mm-qps-10000-ins.html "HighScalability.com")

[Using Redis at Scale at Twitter - by Rashmi Ramesh of Twitter - RedisConf17](https://www.youtube.com/watch?v=QznaOSk20nU "Youtube")

## Wide Column

[Cassandra](https://cassandra.apache.org/ "Cassandra")

[HBase](https://hbase.apache.org/ "Apache HBase")

Conceptually similar to adding a second dimension to a key-value.

At the outer layer you have a key space, which holds one or more column families. Each column family holds a set of ordered rows. This makes it possible to group related data together.

|     | Columns |
| --- | :-----: |


| row-key  | name   | age |    eyes |             fur |
| -------- | ------ | :-: | ------: | --------------: |
| cedric   | cedric | 12  |   green |          ginger |
| poopert  | rupert | 10  |     owl | black and white |
| baby cat | baby   |  7  | emerald | black and white |

There is no schema, so can handle unstructed data.

There is a query language CQL (Cassandra Query Language) which is similar to SQL.

Decentralised. Scales horizontally.

Best for: time-series, historical records (i.e. weather data), high-write, low-read.

## Document

MongoDB, Firestore, DynamoDB, CouchDB

Each document is a container for key-value pairs. They are unstructured and don't rquire a schema. Documnets are grouped together in collections. Fields within a collection can be indexed and collections can be organised into a logical hierarchy, allowing you to model and retrieve relational data to a pretty significant degree.

They don't support joins, so instead of normalising it is encouraged to embedded data into a single document. This is faster on the fronted, but can be slower and more complex to write and update.

Best for: most apps, games, IOT, content management.

## Relational

Postgres, MySQL, SQL Server

SQL - Structured Query Language. Allows you access and write data in the database.

Bakery Database

Toppings

chocolate buttercream
cream cheese
white chocolate ganache

Bases

chocolate sponge (base_id - this is the primary key): recipe
red velvet (base_id): recipe
carrot cake (base_id): recipe

Decorations

sugar sprinkles (dec_id): recipe
summer fruits (dec_id): recipe
oreos (dec_id): recipe
red velvet crumbs (dec_id): recipe

Cakes

base_id: carrot cake (base_id - foreign cake as this references data in a different table)
topping_id: cream cheese (top_id)
decoration_id: red velvet crumbs (dec_id)

Data is stored in it's smallest normal form.

A schema is required which is the relationships between the data and where it is stored, this can be problematic if you don't know in advance the shape of the data.

ACID (atomicity, consistency, isolation and durability) compliant. Whenever there is a transaction in the database data validity is guaranteed. Banks for example must opperate this way.

This traditional has meant that there can be scaling can be difficult, however there are new solutions that are designed specifically to address this such as CockroachDB <https://www.cockroachlabs.com>

Best for: Most App (these are the most popular type of database in production currently)

Not ideal for: Unstructured data

## Graph

Neo4j, DGraph, DGraph, Janus Graph

Modelled on nodes and edges. Where a node is the data and the relationship between them are edges.

Many to many relationships in SQL databases require a join table with the foreign keys that define the relationship. With Graphs we would define an edge and connect it to the other record.

There are advantages both on performance and in the simplicity of querying the data especially on larger datasets.

Best for: Graphs, Knowledge Graphs, Recommendation engines (for example as used by airbnb).

## Search Engine

These allow you to search for example with a short amount of text and return the most appropriate data ranked in order.

Most of the databases in this space are based onto of the Apache Lucene project.

From a developer perspective they work similarly to a document oriented database. You start with an index and then add a bunch of data objects to it. Under the hood the search database will analyse the text in the document and create an index of the searchable terms.

When user performs a search the engine only has to scan the index of the database. This make it very fast even on large data sets. The database can also run a variety of algorythms in order to rank the best results as well as to filter out typos, handle irrelevant hits.

Solr, ElasticSearch, Algolia, MeiliSearch ( a rust based fulltext search engine)

Best for: search, typeahead functionality.

## Multi-Model

FaunaDB

Describe how you want to access the data through GraphQL. You upload the schema and it automatically creates collections and indexes.

Behind the scenes this works out how to take advantage of the best database paradigms.

You create data by adding documents to collections, as you would with a document database, but are limited to the initial data modelling.

ACID compliant.
Fast

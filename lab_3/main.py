import time

from members import Member, HackerMember
from middleware import TcpResetMiddleware, FakeIpAddressMiddleware, RSTMiddleware
from connection import Connection


def print_package(package):
    try:
        time.sleep(1.5)
    except KeyboardInterrupt:
        raise BaseException("Interrupted by user")

    print("{}".format(package))


def initialize_network():
    client = Member(111, 1)
    server1 = Member(222, 2)
    server2 = HackerMember(333, 3)
    return client, server1, server2


def initialize_middlewares():
    tcp_reset_middleware = TcpResetMiddleware()
    fake_ip_address_middleware = FakeIpAddressMiddleware(333, 3)
    rst_middleware = RSTMiddleware()
    return [tcp_reset_middleware]


def create_connection(client, server1, server2, middlewares):
    connection = Connection([client, server1, server2], middlewares)
    return connection


def run_attacks():
    client, server1, server2 = initialize_network()
    middlewares = initialize_middlewares()
    connection = create_connection(client, server1, server2, middlewares)

    client.callAnyOther(connection)


run_attacks()


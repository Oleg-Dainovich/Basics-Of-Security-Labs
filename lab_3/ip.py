class IP:

    def __init__(self, source_ip, destination_ip, payload):
        self.version = 1
        self.ihl = 5
        self.dscp = None
        self.ecn = None
        self.total_length = 500
        self.id = None
        self.flags = None
        self.fragment_offset = None
        self.ttl = 5
        self.protocol = 6  # tcp code
        self.checksum = None
        self.source_ip = source_ip
        self.destination_ip = destination_ip
        self.payload = payload
